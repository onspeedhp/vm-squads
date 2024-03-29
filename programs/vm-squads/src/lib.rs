use anchor_lang::prelude::*;

pub mod account;
pub mod instructions;
pub mod state;

use account::*;

declare_id!("5DFsW9hcUbk8feRA64mVWiueKkhwoWQHB7ypWgDgfJB7");

#[program]
pub mod vm_squads {
    use super::*;

    pub fn create_txn<'c: 'info, 'info>(
        ctx: Context<'_, '_, 'c, 'info, CreateTxn<'info>>,
        authority_index: u32,
    ) -> Result<()> {
        instructions::create_txn(ctx, authority_index)
    }
}
