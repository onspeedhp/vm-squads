export type SquadsMpl = {
  version: '1.3.0';
  name: 'squads_mpl';
  instructions: [
    {
      name: 'create';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'creator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'threshold';
          type: 'u16';
        },
        {
          name: 'createKey';
          type: 'publicKey';
        },
        {
          name: 'members';
          type: {
            vec: 'publicKey';
          };
        },
        {
          name: 'meta';
          type: 'string';
        }
      ];
      returns: null;
    },
    {
      name: 'addMember';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'newMember';
          type: 'publicKey';
        }
      ];
      returns: null;
    },
    {
      name: 'removeMember';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: 'oldMember';
          type: 'publicKey';
        }
      ];
      returns: null;
    },
    {
      name: 'removeMemberAndChangeThreshold';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: 'oldMember';
          type: 'publicKey';
        },
        {
          name: 'newThreshold';
          type: 'u16';
        }
      ];
      returns: null;
    },
    {
      name: 'addMemberAndChangeThreshold';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'newMember';
          type: 'publicKey';
        },
        {
          name: 'newThreshold';
          type: 'u16';
        }
      ];
      returns: null;
    },
    {
      name: 'changeThreshold';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: 'newThreshold';
          type: 'u16';
        }
      ];
      returns: null;
    },
    {
      name: 'addAuthority';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [];
      returns: null;
    },
    {
      name: 'createTransaction';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'transaction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'creator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'authorityIndex';
          type: 'u32';
        }
      ];
      returns: null;
    },
    {
      name: 'activateTransaction';
      accounts: [
        {
          name: 'multisig';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'transaction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'creator';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [];
      returns: null;
    },
    {
      name: 'addInstruction';
      accounts: [
        {
          name: 'multisig';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'transaction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'instruction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'creator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'incomingInstruction';
          type: {
            defined: 'IncomingInstruction';
          };
        }
      ];
      returns: null;
    },
    {
      name: 'approveTransaction';
      accounts: [
        {
          name: 'multisig';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'transaction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'member';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [];
      returns: null;
    },
    {
      name: 'rejectTransaction';
      accounts: [
        {
          name: 'multisig';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'transaction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'member';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [];
      returns: null;
    },
    {
      name: 'cancelTransaction';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'transaction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'member';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
      returns: null;
    },
    {
      name: 'executeTransaction';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'transaction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'member';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: 'accountList';
          type: 'bytes';
        }
      ];
      returns: null;
    },
    {
      name: 'executeInstruction';
      accounts: [
        {
          name: 'multisig';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'transaction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'instruction';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'member';
          isMut: true;
          isSigner: true;
        }
      ];
      args: [];
      returns: null;
    }
  ];
  accounts: [
    {
      name: 'ms';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'threshold';
            type: 'u16';
          },
          {
            name: 'authorityIndex';
            type: 'u16';
          },
          {
            name: 'transactionIndex';
            type: 'u32';
          },
          {
            name: 'msChangeIndex';
            type: 'u32';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'createKey';
            type: 'publicKey';
          },
          {
            name: 'allowExternalExecute';
            type: 'bool';
          },
          {
            name: 'keys';
            type: {
              vec: 'publicKey';
            };
          }
        ];
      };
    },
    {
      name: 'msTransaction';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'creator';
            type: 'publicKey';
          },
          {
            name: 'ms';
            type: 'publicKey';
          },
          {
            name: 'transactionIndex';
            type: 'u32';
          },
          {
            name: 'authorityIndex';
            type: 'u32';
          },
          {
            name: 'authorityBump';
            type: 'u8';
          },
          {
            name: 'status';
            type: {
              defined: 'MsTransactionStatus';
            };
          },
          {
            name: 'instructionIndex';
            type: 'u8';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'approved';
            type: {
              vec: 'publicKey';
            };
          },
          {
            name: 'rejected';
            type: {
              vec: 'publicKey';
            };
          },
          {
            name: 'cancelled';
            type: {
              vec: 'publicKey';
            };
          },
          {
            name: 'executedIndex';
            type: 'u8';
          }
        ];
      };
    },
    {
      name: 'msInstruction';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'programId';
            type: 'publicKey';
          },
          {
            name: 'keys';
            type: {
              vec: {
                defined: 'MsAccountMeta';
              };
            };
          },
          {
            name: 'data';
            type: 'bytes';
          },
          {
            name: 'instructionIndex';
            type: 'u8';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'executed';
            type: 'bool';
          }
        ];
      };
    }
  ];
  types: [
    {
      name: 'MsAccountMeta';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'pubkey';
            type: 'publicKey';
          },
          {
            name: 'isSigner';
            type: 'bool';
          },
          {
            name: 'isWritable';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'IncomingInstruction';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'programId';
            type: 'publicKey';
          },
          {
            name: 'keys';
            type: {
              vec: {
                defined: 'MsAccountMeta';
              };
            };
          },
          {
            name: 'data';
            type: 'bytes';
          }
        ];
      };
    },
    {
      name: 'MsTransactionStatus';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Draft';
          },
          {
            name: 'Active';
          },
          {
            name: 'ExecuteReady';
          },
          {
            name: 'Executed';
          },
          {
            name: 'Rejected';
          },
          {
            name: 'Cancelled';
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'KeyNotInMultisig';
    },
    {
      code: 6001;
      name: 'InvalidTransactionState';
    },
    {
      code: 6002;
      name: 'InvalidNumberOfAccounts';
    },
    {
      code: 6003;
      name: 'InvalidInstructionAccount';
    },
    {
      code: 6004;
      name: 'InvalidAuthorityIndex';
    },
    {
      code: 6005;
      name: 'TransactionAlreadyExecuted';
    },
    {
      code: 6006;
      name: 'CannotRemoveSoloMember';
    },
    {
      code: 6007;
      name: 'InvalidThreshold';
    },
    {
      code: 6008;
      name: 'DeprecatedTransaction';
    },
    {
      code: 6009;
      name: 'InstructionFailed';
    },
    {
      code: 6010;
      name: 'MaxMembersReached';
    },
    {
      code: 6011;
      name: 'EmptyMembers';
    },
    {
      code: 6012;
      name: 'PartialExecution';
    },
    {
      code: 6013;
      name: 'NotEnoughLamports';
    }
  ];
};

export const IDL: SquadsMpl = {
  version: '1.3.0',
  name: 'squads_mpl',
  instructions: [
    {
      name: 'create',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'creator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'threshold',
          type: 'u16',
        },
        {
          name: 'createKey',
          type: 'publicKey',
        },
        {
          name: 'members',
          type: {
            vec: 'publicKey',
          },
        },
        {
          name: 'meta',
          type: 'string',
        },
      ],
      returns: null,
    },
    {
      name: 'addMember',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newMember',
          type: 'publicKey',
        },
      ],
      returns: null,
    },
    {
      name: 'removeMember',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'oldMember',
          type: 'publicKey',
        },
      ],
      returns: null,
    },
    {
      name: 'removeMemberAndChangeThreshold',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'oldMember',
          type: 'publicKey',
        },
        {
          name: 'newThreshold',
          type: 'u16',
        },
      ],
      returns: null,
    },
    {
      name: 'addMemberAndChangeThreshold',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newMember',
          type: 'publicKey',
        },
        {
          name: 'newThreshold',
          type: 'u16',
        },
      ],
      returns: null,
    },
    {
      name: 'changeThreshold',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'newThreshold',
          type: 'u16',
        },
      ],
      returns: null,
    },
    {
      name: 'addAuthority',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
      returns: null,
    },
    {
      name: 'createTransaction',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'transaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'creator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'authorityIndex',
          type: 'u32',
        },
      ],
      returns: null,
    },
    {
      name: 'activateTransaction',
      accounts: [
        {
          name: 'multisig',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'transaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'creator',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
      returns: null,
    },
    {
      name: 'addInstruction',
      accounts: [
        {
          name: 'multisig',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'transaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instruction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'creator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'incomingInstruction',
          type: {
            defined: 'IncomingInstruction',
          },
        },
      ],
      returns: null,
    },
    {
      name: 'approveTransaction',
      accounts: [
        {
          name: 'multisig',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'transaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'member',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
      returns: null,
    },
    {
      name: 'rejectTransaction',
      accounts: [
        {
          name: 'multisig',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'transaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'member',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
      returns: null,
    },
    {
      name: 'cancelTransaction',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'transaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'member',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: null,
    },
    {
      name: 'executeTransaction',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'transaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'member',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'accountList',
          type: 'bytes',
        },
      ],
      returns: null,
    },
    {
      name: 'executeInstruction',
      accounts: [
        {
          name: 'multisig',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'transaction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'instruction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'member',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
      returns: null,
    },
  ],
  accounts: [
    {
      name: 'ms',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'threshold',
            type: 'u16',
          },
          {
            name: 'authorityIndex',
            type: 'u16',
          },
          {
            name: 'transactionIndex',
            type: 'u32',
          },
          {
            name: 'msChangeIndex',
            type: 'u32',
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'createKey',
            type: 'publicKey',
          },
          {
            name: 'allowExternalExecute',
            type: 'bool',
          },
          {
            name: 'keys',
            type: {
              vec: 'publicKey',
            },
          },
        ],
      },
    },
    {
      name: 'msTransaction',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'creator',
            type: 'publicKey',
          },
          {
            name: 'ms',
            type: 'publicKey',
          },
          {
            name: 'transactionIndex',
            type: 'u32',
          },
          {
            name: 'authorityIndex',
            type: 'u32',
          },
          {
            name: 'authorityBump',
            type: 'u8',
          },
          {
            name: 'status',
            type: {
              defined: 'MsTransactionStatus',
            },
          },
          {
            name: 'instructionIndex',
            type: 'u8',
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'approved',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'rejected',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'cancelled',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'executedIndex',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'msInstruction',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programId',
            type: 'publicKey',
          },
          {
            name: 'keys',
            type: {
              vec: {
                defined: 'MsAccountMeta',
              },
            },
          },
          {
            name: 'data',
            type: 'bytes',
          },
          {
            name: 'instructionIndex',
            type: 'u8',
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'executed',
            type: 'bool',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'MsAccountMeta',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'pubkey',
            type: 'publicKey',
          },
          {
            name: 'isSigner',
            type: 'bool',
          },
          {
            name: 'isWritable',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'IncomingInstruction',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programId',
            type: 'publicKey',
          },
          {
            name: 'keys',
            type: {
              vec: {
                defined: 'MsAccountMeta',
              },
            },
          },
          {
            name: 'data',
            type: 'bytes',
          },
        ],
      },
    },
    {
      name: 'MsTransactionStatus',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Draft',
          },
          {
            name: 'Active',
          },
          {
            name: 'ExecuteReady',
          },
          {
            name: 'Executed',
          },
          {
            name: 'Rejected',
          },
          {
            name: 'Cancelled',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'KeyNotInMultisig',
    },
    {
      code: 6001,
      name: 'InvalidTransactionState',
    },
    {
      code: 6002,
      name: 'InvalidNumberOfAccounts',
    },
    {
      code: 6003,
      name: 'InvalidInstructionAccount',
    },
    {
      code: 6004,
      name: 'InvalidAuthorityIndex',
    },
    {
      code: 6005,
      name: 'TransactionAlreadyExecuted',
    },
    {
      code: 6006,
      name: 'CannotRemoveSoloMember',
    },
    {
      code: 6007,
      name: 'InvalidThreshold',
    },
    {
      code: 6008,
      name: 'DeprecatedTransaction',
    },
    {
      code: 6009,
      name: 'InstructionFailed',
    },
    {
      code: 6010,
      name: 'MaxMembersReached',
    },
    {
      code: 6011,
      name: 'EmptyMembers',
    },
    {
      code: 6012,
      name: 'PartialExecution',
    },
    {
      code: 6013,
      name: 'NotEnoughLamports',
    },
  ],
};
