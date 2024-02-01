import { A } from "@solidjs/router";

function Methods() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 shadow-md rounded-md">
                    <h1 className="text-2xl font-bold mb-4 text-center">Choose your Service setup method!</h1>

                    <div className="flex gap-5">
                        <button
                            className="bg-gray-200 w-64 h-64 flex flex-col rounded justify-center items-center gap-5"
                            onClick={() => document.getElementById("import_modal").showModal()}
                        >
                            <i className="fa-solid fa-upload text-6xl"></i>
                            <h3>Import your Service</h3>
                        </button>

                        <A
                            className="bg-gray-200 w-64 h-64 flex flex-col rounded justify-center items-center gap-5"
                            href="/setup/ez"
                        >
                            <i className="fa-solid fa-server text-6xl"></i>
                            <h3>Setup a new Service</h3>
                        </A>
                    </div>
                </div>
            </div>

            <dialog id="import_modal" className="modal">
                <div className="modal-box">
                    <div className="flex flex-row justify-between">
                        <h3 className="font-bold text-lg">Import</h3>
                        <form method="dialog" className="inline">
                            <button>
                                <i className="fa-solid fa-xmark text-2xl"
                                ></i>
                            </button>
                        </form>
                    </div>
                    <p className="py-4">
                        Import Service from:
                    </p>
                    <div className="flex flex-row justify-around">
                        <button
                            className="bg-gray-200 w-32 h-32 flex flex-col rounded justify-center items-center gap-5"
                            onClick={() => importFrom("Local Wordpress folder")}
                        >
                            <i className="fa-brands fa-wordpress text-3xl"></i>
                            <h3 className="text-sm">Local Wordpress</h3>
                        </button>
                        <button
                            className="bg-gray-200 w-32 h-32 flex flex-col rounded justify-center items-center gap-5"
                            onClick={() => importFrom("Git Repository")}
                        >
                            <i className="fa-brands fa-git-alt text-3xl"></i>
                            <h3 className="text-sm">Git Repository</h3>
                        </button>
                        <button
                            className="bg-gray-200 w-32 h-32 flex flex-col rounded justify-center items-center gap-5"
                            onClick={() => importFrom("Docker Container")}
                        >
                            <i className="fa-brands fa-docker text-3xl"></i>
                            <h3 className="text-sm">Docker Container</h3>
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

// Fungsi-fungsi untuk import
function importFrom(source) {
    // Logika untuk mengimpor website dari local PC
    alert(`Mengimpor website dari ${source}...`);
    // Tambahkan kode sesuai kebutuhan Anda
}

function importFromWordPress() {
    // Logika untuk mengimpor website dari WordPress
    alert('Mengimpor website dari WordPress...');
    // Tambahkan kode sesuai kebutuhan Anda
}

export default Methods;