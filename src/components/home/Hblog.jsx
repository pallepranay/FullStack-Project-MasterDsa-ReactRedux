import React from "react"
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"


// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className='blog'>
        <Heading subtitle='OUR BLOG' title='Recent From MasterDsa Blogs' />
        <div className='container'>
          
          <div style = {{paddingTop:"75px"}}>
            <div className='grid2'>
              {blog.slice(0, 3).map((val) => (
                <div className='items shadow'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <div className='admin flexSB'>
                      <span>
                        <i className='fa fa-user'></i>
                        <label htmlFor=''>{val.type}</label>
                      </span>
                      <span>
                        <i className='fa fa-calendar-alt'></i>
                        <label htmlFor=''>{val.date}</label>
                      </span>
                      <span>
                        <i className='fa fa-comments'></i>
                        <label htmlFor=''>{val.com}</label>
                      </span>
                    </div>
                    <h1>{val.title}</h1>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog
