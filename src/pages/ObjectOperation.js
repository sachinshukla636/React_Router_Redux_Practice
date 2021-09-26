import React from 'react';
import './Common.css'

const books =[
    {
        bookName : "Physics",
        author : "H.C. Verma",
        published : 2009
    },
    {
        bookName : "Chemistry",
        author : "Pradeep",
        published : 2008
    },
    {
        bookName : "Math",
        author : "R.S Agrawal",
        published : 2007
    },
    {
        bookName : "English",
        author : "William Shakespeare",
        published : 2006
    }
]
const ObjectOperation = () =>{
    return(
        <>
            <h2>Object Operation</h2>
            <div className="root">
                <div className="container">
                    {books.map((item,index) => (
                        <div className="item-container">
                            <p>Name :{item.bookName}</p>
                            <p>Author:{item.author}</p>
                            <p>Published:{item.published}</p>
                            <div className="btn-container">
                                <button className="button">Add to library</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="root">
                    <div className="container">
                        {books.map((item,index) => (
                            <div className="item-container">
                            <p>Name :{item.bookName}</p>
                            <p>Author:{item.author}</p>
                            <p>Published:{item.published}</p>
                            <div className="btn-container">
                                <button className="button">Add to library</button>
                            </div>
                            </div>
                        ))}
                    </div>
            </div>
        </>
    )
}
export default ObjectOperation;