use anchor_lang::prelude::*;

pub mod account;
pub mod instructions;
pub mod state;

use account::*;

declare_id!("3XR9BbkbddGNFCbEG59XXEy9MydHZmGZb6jEq4VxQWY7");

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
