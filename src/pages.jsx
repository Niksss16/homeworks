import "./App.css"
import {Link, NavLink} from "react-router-dom"
import data from "./data.json"
export const Home =()=>{
    return (
        <>
            <div className="route-box">
                <Link to ="/CSS">CSS</Link>
                <Link to="/Git">Git</Link>
                <Link to="/Github">Github</Link>
                <Link to="/Python">Python</Link>
                <Link to="/HTML">HTML</Link>
                <Link to="/Django">Django</Link>
                
            </div>
        </>
    )
}
export const CSS =()=>{
    const title = data[0].title
    const wiki = data[0].content
    return (
        <>
            <div className="route-box">
                <Link to ="/">home</Link>
                <Link to="/Git">Git</Link>
                <Link to="/Github">Github</Link>
                <Link to="/Python">Python</Link>
                <Link to="/HTML">HTML</Link>
                <Link to="/Django">Django</Link>
            </div>
            <h2>{title}</h2>
            <p>{wiki}</p>
        </>
    )
}
export const Git =()=>{
    const title = data[2].title
    const wiki = data[2].content
    return (
        <>
            <div className="route-box">
                <Link to ="/CSS">CSS</Link>
                <Link to="/">Home</Link>
                <Link to="/Github">Github</Link>
                <Link to="/Python">Python</Link>
                <Link to="/HTML">HTML</Link>
                <Link to="/Django">Django</Link>
            </div>
            <h2>{title}</h2>
            <p>{wiki}</p>
        </>
    )
}
export const GitHub =()=>{
    const title = data[3].title
    const wiki = data[3].content
    return (
        <>
            <div className="route-box">
                <Link to ="/CSS">CSS</Link>
                <Link to="/Git">Git</Link>
                <Link to="/">Home</Link>
                <Link to="/Python">Python</Link>
                <Link to="/HTML">HTML</Link>
                <Link to="/Django">Django</Link>
            </div>
            <h2>{title}</h2>
            <p>{wiki}</p>
        </>
    )
}
export const Python =()=>{
    const title = data[5].title
    const wiki = data[5].content
    return (
        <>
            <div className="route-box">
                <Link to ="/CSS">CSS</Link>
                <Link to="/Git">Git</Link>
                <Link to="/Github">Github</Link>
                <Link to="/">Home</Link>
                <Link to="/HTML">HTML</Link>
                <Link to="/Django">Django</Link>
            </div>
            <h2>{title}</h2>
            <p>{wiki}</p>
        </>
    )
}
export const HTML =()=>{
    const title = data[4].title
    const wiki = data[4].content
    return (
        <>
            <div className="route-box">
                <Link to ="/CSS">CSS</Link>
                <Link to="/Git">Git</Link>
                <Link to="/Github">Github</Link>
                <Link to="/Python">Python</Link>
                <Link to="/">Home</Link>
                <Link to="/Django">Django</Link>
            </div>
            <h2>{title}</h2>
            <p>{wiki}</p>
        </>
    )
}
export const Django =()=>{
    const title = data[1].title
    const wiki = data[1].content
    return (
        <>
            <div className="route-box">
                <Link to ="/CSS">CSS</Link>
                <Link to="/Git">Git</Link>
                <Link to="/Github">Github</Link>
                <Link to="/Python">Python</Link>
                <Link to="/HTML">HTML</Link>
                <Link to="/">Home</Link>
            </div>
            <h2>{title}</h2>
            <p>{wiki}</p>
        </>
    )
}
export const NotPage = ()=>{
    return(
        <h2>Sorry buddy, Page not found🖤, Go to home page - <Link to="/">Home</Link></h2>
    )
}

// export const NavbarKind =()=>{
//     return(
//         <div className="wiki-box">
            
//         </div>
//     )
// }