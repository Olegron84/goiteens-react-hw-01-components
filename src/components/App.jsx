
import Friendlist from './Friendlist/Friendlist';
import Profile from "./Profile/Profile"
import ProfileData from "./Profile/ProfileData.json"
import friends from "./Friendlist/friends.json"
import Transactionhistory from './Transactionhistory/Transactionhistory';
import transactions from "./Transactionhistory/transactions.json"
function App() {
  return (
  <div>
    <Profile
    username={ProfileData.username}
    tag={ProfileData.tag}
    location={ProfileData.location}
    avatar={ProfileData.avatar} 
    stats={ProfileData.stats}
    />
    <Friendlist friends_f={friends}/>
    <Transactionhistory items={transactions}/>
  </div>
  )
}

export default App
