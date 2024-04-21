
export default function Pagination({postPerPage, totalPost, paginate}){
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i)
    }

    

    return <nav>
        <ul>
            {pageNumbers.map(number=> (
                <li key= {number}>
                    <a onClick={()=> paginate(number)} href="#">{number}</a>
                </li>
            ))}
        </ul>
    </nav>

}