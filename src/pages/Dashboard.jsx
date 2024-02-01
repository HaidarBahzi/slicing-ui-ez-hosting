import { A } from "@solidjs/router";

function Dashboard() {
    return (<>
        <div className="flex justify-center items-center h-screen">
            <button
                className="border-dashed border-2 border-gray-500 w-1/2 h-1/2"
                onClick={() => document.getElementById("confirm_modal").showModal()}
            >
                <i className="fa-solid fa-server text-6xl"></i>
                <div className="h-8"></div>
                <h1 className="text-3xl font-bold">Start Quick Setup</h1>
            </button>
        </div>

        <dialog id="confirm_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">
                    Are you sure want to start quick setup process?
                </p>
                <div className="modal-action">
                    <A href="/setup/method" className="btn btn-sm btn-success text-white">
                        Continue
                    </A>
                    <form method="dialog">
                        <button className="btn btn-sm btn-error text-white">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    </>);

}

export default Dashboard;