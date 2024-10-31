import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from './supabase';
export default function NavMenu()
{
    const [item, setItem] = useState([]);
    useEffect(
        () =>{
            const fetchItems = async() =>{
                const {data, error} = await supabase.from('scp').select('id, item');
                if(error)
                {
                    console.error(error);
                } else{
                    setItem(data);
                }
 
            };
            fetchItems();
 
        },[]
    )
    return(
        <div class="navmenu">
            <ul>
                {
                    item.length > 0 ? item.map(
                        (items) =>(
                            <li key={items.id}>
                                <Link to={`/item/${items.id}`}>{items.item}</Link>
                            </li>
                        )
                    ) : (
                        <div>Something went wrong</div>
                    )
                }
                <li>
                    <Link to="/admin">Adim Panel</Link>
                </li>
            </ul>
        </div>
    );
}