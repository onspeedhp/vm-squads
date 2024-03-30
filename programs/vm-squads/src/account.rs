use anchor_lang::prelude::*;

#[derive(Accounts)]
pub struct CreateTxn<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(mut)]
    /// CHECK:
    pub multisig: AccountInfo<'info>,

    #[account(mut)]
    /// CHECK:
    pub transaction: AccountInfo<'info>,

    #[account(mut)]
    /// CHECK:
    pub instruction: AccountInfo<'info>,

    /// CHECK:
    pub squads_mpl: AccountInfo<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Execute<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
}
