use anchor_lang::prelude::*;

pub mod account;
pub mod instructions;
pub mod state;

use account::*;

declare_id!("5mu1kEPvm144whERH8q2WumCeTEvWtN2ajnAbLjoVwc1");

#[program]
pub mod vm_squads {
    use super::*;

    pub fn create_txn(ctx: Context<CreateTxn>, authority_index: u32) -> Result<()> {
        instructions::create_txn(ctx, authority_index)
    }

    pub fn execute(ctx: Context<Execute>) -> Result<()> {
        instructions::execute(ctx)
    }
}
