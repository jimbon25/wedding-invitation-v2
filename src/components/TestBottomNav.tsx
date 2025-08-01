'use client';

export default function TestBottomNav() {
  console.log('TestBottomNav is rendering');

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-red-500 text-white text-center py-4 z-50"
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'red',
        color: 'white',
        padding: '16px',
        zIndex: 9999,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>TEST BOTTOM NAVIGATION - APAKAH MUNCUL?</p>
    </div>
  );
}
