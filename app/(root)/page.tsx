import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar'

const Home = () => {
  const loggedIn = { firstName: 'Kai', lastName: 'Williams', email: 'kailuwilliams@gmail.com'}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account
            and transactions efficiently."
          />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1234.56}
        />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.45}, { currentBalance: 123.45}]}
      />
    </section>
  )
}

export default Home