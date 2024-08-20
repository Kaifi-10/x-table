import React, { useState } from 'react'

const Table = () => {

    const tableData = 
    [
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },    
        { date: "2023-09-02", views: 150, article: "Article 2" },    
        { date: "2023-09-02", views: 120, article: "Article 3" },    
        { date: "2020-09-03", views: 200, article: "Article 4" }    
    ]

    const [sortedData, setSortedData] = useState([...tableData])

    const sortByDate = () =>{
        const data = [...tableData]
        const sorted = data.sort((a, b) => {
           if(a.date !== b.date) return new Date(b.date) - new Date(a.date)
            return b.views - a.views
        })
        setSortedData(sorted)
    }
    
    const sortByViews = () =>{
        const data = [...tableData]
        const sorted = data.sort((a,b) =>{
            if(a.views !== b.views) return b.views - a.views
            return new Date(b.date) - new Date(a.date)
        })
        setSortedData(sorted)
    }
    

    const tableView = (data) =>{
        return(
            <div>
                <table>
                    <thead>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </thead>
                    <tbody>
                        {data.map((data) =>(
                            <tr>
                                <td>{data.date}</td>
                                <td>{data.views}</td>
                                <td>{data.article}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
  return (
    <div>
        <h1>Date and Views Table</h1>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
        {tableView(sortedData)}
    </div>
  )
}

export default Table