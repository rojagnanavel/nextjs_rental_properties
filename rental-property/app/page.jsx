import Link from "next/link";

const Homepage = () => {
    return ( 
        <div className="text-3xl">
            welcome to you!!!!
            <Link 
                href={{
                    pathname:'properties',
                    query:{name:'test'}
                }}>
                    Go To Properties
            </Link>
        </div>
     );
}
 
export default Homepage;