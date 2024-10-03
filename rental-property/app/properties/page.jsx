'use client';
import { useRouter,useParams } from "next/navigation";
const  PropertyPage= () => {
    const router = useRouter();
    const params = useParams();
    console.log('params', params);
    console.log('router',router);
    console.log('property page component');
    return <div>Properties page {params.id}</div>;
}
 
export default PropertyPage;