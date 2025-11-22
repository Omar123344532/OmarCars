import { useGetProfileInfoQuery } from "../api/profileApi";

export default function Profile() {
    const { data, isLoading, error } = useGetProfileInfoQuery();
    return (
        <div>
            name: {data?.name} <br />
            email: {data?.email} <br />
            phone: {data?.phone} <br />
            address: {data?.address} <br />
            city: {data?.city} <br />
            state: {data?.state} <br />
            zip: {data?.zip} <br />   
            country: {data?.country} <br />
            username: {data?.username} <br />
        </div>
    );
}