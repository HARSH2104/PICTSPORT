import React from 'react'

export default function Transaction() {
   
    const InformationOfCard = [
        {
            "id": 1,
            "name": "jiophone",
            "user": "Mahadev",
            "quantity": 2
        },
        {
            "id": 2,
            "name": "cosmos",
            "user": "Harsh",
            "quantity": 3
        },
        {
            "id": 3,
            "name": "cosmos",
            "user": "Prashant",
            "quantity": 1
        },

    ]

    
    return (
        <>

            <div className="container" >

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {InformationOfCard.map((element) => {
                            return (

                                <tr key={element.id}>
                                    <th scope="row" >{element.id}</th>
                                    <td>{element.name}</td>
                                    <td>{element.user}</td>
                                    <td>{element.quantity}</td>
                                </tr>

                            );
                        })}


                    </tbody>
                </table>


                

            </div>

        </>
    )
}
