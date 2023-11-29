import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

import './App.css'

// react ile context kullanmak istediğinde

// 1. createContext fonksiyonunu kullanarak context'ini oluştur
// 2. oluşturduğun context'in sağlayıcısi ile değeri tüm öğeler ışınla

function App() {
  const [user, setUser] = useState({ userName: "Burak", id: 14 })

  return (
    <UserContext.Provider value={user}>
      <h1>Hello useContext hook</h1>
      { /* prop drilling */}
      <EntitySection theme="light" />
      <button onClick={(e) => { setUser({ id: 22, userName: "Samet" }) }}>Kullanıcı değiştir</button>

      { /* 
      Prop drilling'i  önlemek için bir yöntem de : Extract components and pass JSX as children to them 
      
      <EntitySection>
        <ChatBox>
            <DialogueModal theme/>
        </ChatBox>
      </EntitySection>
      
      */ }

    </UserContext.Provider>
  )
}


function EntitySection({ theme, children }) {
  return <section>
    <ChatBox theme={theme} />
  </section>
}


function ChatBox({ theme, children }) {
  return <div>
    <DialogueModal theme={theme} />
  </div>
}

function DialogueModal({ theme }) {
  const currentUser = useContext(UserContext); //Kullanıcı context'inden değeri al
  return <div className={theme}>
    <h2>Hello me the dialogue modal. Kullanıcı : {currentUser.id} {currentUser.userName}</h2>
  </div>
}


export default App