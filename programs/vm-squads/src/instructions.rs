use anchor_lang::prelude::*;
use squads_mpl::cpi::accounts::{ActivateTransaction, AddInstruction, CreateTransaction};

use squads_mpl::cpi::{activate_transaction, add_instruction, create_transaction};
use squads_mpl::{IncomingInstruction, MsAccountMeta};
pub const SIGHASH_GLOBAL_NAMESPACE: &str = "global";

use crate::account::{CreateTxn, Execute};
use crate::ID;

pub fn create_txn(ctx: Context<CreateTxn>, authority_index: u32) -> Result<()> {
    let multisig = &ctx.accounts.multisig;
    let transaction = &ctx.accounts.transaction;
    let creator = &ctx.accounts.user.to_account_info();
    let system_program = &ctx.accounts.system_program.to_account_info();

    // Create Transaction
    let creact_txn_accounts = CreateTransaction {
        multisig: multisig.clone(),
        transaction: transaction.clone(),
        creator: creator.clone(),
        system_program: system_program.clone(),
    };

    let create_txn_context = CpiContext::new(
        ctx.accounts.squads_mpl.to_account_info(),
        creact_txn_accounts,
    );

    create_transaction(create_txn_context, authority_index).unwrap();

    // Add instruction
    let add_ins_accounts = AddInstruction {
        multisig: multisig.clone(),
        transaction: transaction.clone(),
        creator: creator.clone(),
        system_program: system_program.clone(),
        instruction: ctx.accounts.instruction.to_account_info(),
    };

    let add_ins_context =
        CpiContext::new(ctx.accounts.squads_mpl.to_account_info(), add_ins_accounts);

    let incoming_ins = IncomingInstruction {
        program_id: ID,
        keys: vec![MsAccountMeta {
            pubkey: creator.key(),
            is_signer: true,
            is_writable: true,
        }],
        data: sighash("execute").to_vec(),
    };

    add_instruction(add_ins_context, incoming_ins).unwrap();

    // Active transaction
    let active_txn_accounts = ActivateTransaction {
        multisig: multisig.clone(),
        transaction: transaction.clone(),
        creator: creator.clone(),
    };

    let active_txn_context = CpiContext::new(
        ctx.accounts.squads_mpl.to_account_info(),
        active_txn_accounts,
    );

    activate_transaction(active_txn_context).unwrap();

    // Add Instruction

    Ok(())
}

pub fn execute(_ctx: Context<Execute>) -> Result<()> {
    msg!("Execute successfully");
    Ok(())
}

pub fn sighash(name: &str) -> [u8; 8] {
    let preimage = format!("{}:{}", SIGHASH_GLOBAL_NAMESPACE, name);

    let mut sighash = [0u8; 8];
    sighash.copy_from_slice(
        &anchor_lang::solana_program::hash::hash(preimage.as_bytes()).to_bytes()[..8],
    );
    sighash
}
