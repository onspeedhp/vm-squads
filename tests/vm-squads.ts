import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { VmSquads } from '../target/types/vm_squads';
import * as borsh from 'borsh';

import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  Keypair,
} from '@solana/web3.js';

describe('vm-squads', () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.VmSquads as Program<VmSquads>;
  const anchorProvider = program.provider as anchor.AnchorProvider;

  it('Is initialized!', async () => {
    const squadMpl = new PublicKey(
      'SMPLecH534NA9acpos4G6x7uf3LWbCAwZQE9e8ZekMu'
    );
    const multisig = new PublicKey(
      '6FuFL12N1oqfFMKykAncBJgS4XYZxR1QYETbFJDqaftM'
    );

    const [transactionPDA, _] = PublicKey.findProgramAddressSync(
      [
        Buffer.from('squad'),
        multisig.toBuffer(),
        Buffer.from(borsh.serialize('u32', 8)),
        Buffer.from('transaction'),
      ],
      squadMpl
    );

    const tx = await program.methods
      .createTxn(8)
      .accounts({
        user: anchorProvider.wallet.publicKey,
        multisig: multisig,
        transaction: transactionPDA,
        squadsMpl: squadMpl,
      })
      .rpc({ skipPreflight: true });

    console.log('Create transaction', tx);
  });
});
