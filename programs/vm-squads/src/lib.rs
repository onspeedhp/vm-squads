use anchor_lang::prelude::*;

declare_id!("HBEW6kz7GVTfdUZKCWbzF1VZA344zBqbKzYPUP5J1UQE");

#[program]
pub mod vm_squads {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
