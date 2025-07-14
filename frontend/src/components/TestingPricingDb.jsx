import React, { useEffect, useState } from "react"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"

export default function TestingPricingDb({dbName, apiPath}) {
    const [apiData, setApiData] = useState([]);
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchUsers = async () => {
            const token = await getAccessTokenSilently();
            try {
                const response = await axios.get(`/api/pricing/${apiPath}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setApiData(response.data);
                console.log(`${dbName} data fetched successfully:`, response.data);
            } catch (error) {
                console.error(`Error fetching ${dbName}:`, error);
            }

        };
        fetchUsers();
    }, [getAccessTokenSilently]);

    return (
        <>
            <div className="Users">
                <div className="Users__header">
                    <h3>{dbName}</h3>
                </div>
                <div className="Users__content">
                
                    {apiData.length > 0 ? (
                        <ul>
                            {apiData.map(data => (
                                <li key={data.id}>
                                    {data.holder1}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No data found.</p>
                    )}


                </div>
            </div>
        </>
    )

}