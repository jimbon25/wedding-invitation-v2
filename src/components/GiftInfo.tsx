'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GiftInfo() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const bankAccounts = [
    {
      id: 'bca',
      bank: 'Bank BCA',
      accountNumber: '1234567890',
      accountName: 'Dimas Pratama',
      logo: 'bi-bank',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'mandiri',
      bank: 'Bank Mandiri',
      accountNumber: '9876543210',
      accountName: 'Niken Sari',
      logo: 'bi-bank2',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const eWallets = [
    {
      id: 'gopay',
      name: 'GoPay',
      number: '081234567890',
      accountName: 'Dimas Pratama',
      logo: 'bi-phone',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'ovo',
      name: 'OVO',
      number: '081987654321',
      accountName: 'Niken Sari',
      logo: 'bi-phone-fill',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'dana',
      name: 'DANA',
      number: '081122334455',
      accountName: 'Dimas & Niken',
      logo: 'bi-wallet2',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const copyToClipboard = (text: string, accountId: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedAccount(accountId);
        setTimeout(() => setCopiedAccount(null), 2000);
      });
    } else {
      // Fallback for older browsers or SSR
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedAccount(accountId);
        setTimeout(() => setCopiedAccount(null), 2000);
      } catch (err) {
        console.log('Copy failed:', err);
      }
    }
  };

  return (
    <section id="gift" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="font-script text-5xl md:text-6xl gradient-text mb-4">
            Wedding Gift
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we would be grateful for your contribution to our new journey together.
          </p>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
            <i className="bi bi-gift text-4xl text-rose-600 mb-4 block"></i>
            <p className="text-gray-700 italic">
              &quot;The best gifts are those that come from the heart. Your love and support mean the world to us.&quot;
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Bank Accounts */}
          <motion.div
            className="mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              <i className="bi bi-bank mr-2"></i>
              Bank Transfer
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {bankAccounts.map((account) => (
                <motion.div
                  key={account.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`h-20 bg-gradient-to-r ${account.color} flex items-center justify-center`}>
                    <i className={`${account.logo} text-4xl text-white`}></i>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">{account.bank}</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="font-mono font-bold">{account.accountNumber}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Account Name:</span>
                        <span className="font-semibold">{account.accountName}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(account.accountNumber, account.id)}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      {copiedAccount === account.id ? (
                        <>
                          <i className="bi bi-check2"></i>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-clipboard"></i>
                          <span>Copy Account Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* E-Wallets */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              <i className="bi bi-phone mr-2"></i>
              E-Wallet / Digital Payment
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {eWallets.map((wallet) => (
                <motion.div
                  key={wallet.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`h-16 bg-gradient-to-r ${wallet.color} flex items-center justify-center`}>
                    <i className={`${wallet.logo} text-3xl text-white`}></i>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">{wallet.name}</h4>
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Number:</span>
                        <span className="font-mono font-bold">{wallet.number}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-semibold text-xs">{wallet.accountName}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(wallet.number, wallet.id)}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      {copiedAccount === wallet.id ? (
                        <>
                          <i className="bi bi-check2"></i>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-clipboard"></i>
                          <span>Copy Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Physical Gift Information */}
          <motion.div
            className="mt-16 text-center"
            data-aos="zoom-in"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <i className="bi bi-box-seam text-4xl text-rose-600 mb-4 block"></i>
              <h3 className="text-2xl font-bold gradient-text mb-4">Physical Gifts</h3>
              <p className="text-gray-600 mb-6">
                If you prefer to give a physical gift, you can send it to our home address or bring it directly to the wedding venue.
              </p>
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <i className="bi bi-geo-alt-fill text-rose-600 text-xl mt-1"></i>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Home Address:</div>
                    <div className="text-gray-600">
                      Jl. Kebahagiaan No. 25, RT 01/RW 02<br />
                      Kelurahan Cinta, Kecamatan Bahagia<br />
                      Jakarta Selatan 12345
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Please contact us if you need assistance with gift delivery arrangements.
              </p>
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            className="mt-12 text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-lg p-8 text-white max-w-2xl mx-auto">
              <i className="bi bi-heart-fill text-4xl mb-4 block animate-pulse-slow"></i>
              <h3 className="text-2xl font-bold mb-4">Thank You</h3>
              <p className="text-lg">
                Your love, prayers, and support mean more to us than any gift ever could. Thank you for being part of our special day and our lives.
              </p>
              <div className="mt-6 font-script text-2xl">
                With Love,<br />
                Dimas & Niken
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
