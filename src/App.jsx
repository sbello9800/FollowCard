import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx'

{/*Users*/}

const users = [
{
    userName: 'Goku',
    name: 'Kakaroto',
    isFollowing: true
},
{
    userName: 'Tanjiro',
    name: 'Tanjiro Kamado',
    isFollowing: false
},
{
    userName: 'batman',
    name: 'Bruno Diaz',
    isFollowing: true
}
]


export function App (){
    return (
    <section className='cont'>

        {/*Uso del metodo map para crear un user por cada objeto en el array users
        *Las Keys deben ser unicas */}
        {users.map(({userName, name, isFollowing}) =>(
            <TwitterFollowCard
            key={userName} 
            username={userName}
            initialIsFollowing={isFollowing}>
            {name}
            </TwitterFollowCard>
            )
        )
        }
        
    </section>
        )
}