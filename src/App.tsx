import React, { useEffect, useState } from 'react';
import './App.css';
import { useDebounce } from './hooks/useDebounce';
import { User, fetchUsers } from './components/Request';
import { SearchBar } from './components/SearchBar';

function App() {
  const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState<User[]>([])
    const debouncedSearch = useDebounce(search) 
    
    useEffect(() => {
        const func = async () => {
            setLoading(true)

            const users = await fetchUsers(debouncedSearch)
            setUsers(users)

            setLoading(false)
        }
        func()
    }, [debouncedSearch])


    return (
        <div className='debonce'>
            <SearchBar onChange={setSearch}/>
            {loading && <h1>Loading...</h1>}
            {!loading && 
                users.map(user => (
                    <div className='user' key={user.id}>{user.name}</div>
                ))
            }
        </div>
    )
}

export default App;
