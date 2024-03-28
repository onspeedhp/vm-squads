import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { VmSquads } from '../target/types/vm_squads';

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
    const wallet = anchorProvider.wallet;

    const squadSpl = new PublicKey(
      'SMPLecH534NA9acpos4G6x7uf3LWbCAwZQE9e8ZekMu'
    );
    const multisig = new PublicKey(
      'SMPLecH534NA9acpos4G6x7uf3LWbCAwZQE9e8ZekMu'
    );

    // b"squad",
    // multisig.key().as_ref(),
    // &multisig.transaction_index.checked_add(1).unwrap().to_le_bytes(),
    // b"transaction"

    // const [transactionPDA, _] = PublicKey.findProgramAddressSync(
    //   [
    //     Buffer.from('squad'),
    //     multisig.toBuffer(),
    //     Buffer.from(borsh.serialize('u32', 7)),
    //     Buffer.from('transaction'),
    //   ],
    //   squadSpl
    // );

    // const tx = program.methods
    //   .
    //   .accounts({
    //     user: anchorProvider.wallet.publicKey,
    //     multisig: multisig,
    //     transaction: transactionPDA,
    //     squadsSpl: squadSpl,
    //   })
    //   .rpc({ skipPreflight: true });

    // console.log('Create transaction', tx);
  });
});
