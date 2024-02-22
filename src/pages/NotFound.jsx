import { A } from "@solidjs/router";

function NotFound() {
    return (
        <>
            <div className="min-w-full h-screen flex flex-col justify-center items-center gap-5">
                <div className="flex flex-row">
                    <h3 className="font-semibold text-3xl">404</h3>
                    <div className="divider divider-horizontal"></div>
                    <h3 className="font-semibold text-3xl">Not Found</h3>
                </div>
                <A href="/" className="btn btn-primary">Back to Home</A>
            </div>
        </>);
}

export default NotFound;