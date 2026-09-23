
import { Suspense } from "react";
import { iData } from "../type";
import Loading from "./loading";

const library = async () => {

    const data = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const posts = await data.json();


    return (
        <div>
            <Suspense fallback={<Loading />}>
                {posts.map((post: iData) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </Suspense>
        </div>
    );
};

export default library;