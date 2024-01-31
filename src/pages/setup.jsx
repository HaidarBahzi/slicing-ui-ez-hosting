const Setup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Choose your website upload method!</h1>

                <div className="flex gap-5">
                    <button
                        className="bg-gray-200 w-64 h-64 flex flex-col rounded justify-center items-center gap-5"
                        onClick={importFromLocal}
                    >
                        <i className="fa-solid fa-hard-drive text-6xl"></i>
                        <h3>Import Website from local PC</h3>
                    </button>

                    <button
                        className="bg-gray-200 w-64 h-64 flex flex-col rounded justify-center items-center gap-5"
                        onClick={importFromWordPress}
                    >
                        <i className="fa-brands fa-wordpress text-6xl"></i>
                        <h3>Pick template from wordpress</h3>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Fungsi-fungsi untuk import
function importFromLocal() {
    // Logika untuk mengimpor website dari local PC
    alert('Mengimpor website dari Local PC...');
    // Tambahkan kode sesuai kebutuhan Anda
}

function importFromWordPress() {
    // Logika untuk mengimpor website dari WordPress
    alert('Mengimpor website dari WordPress...');
    // Tambahkan kode sesuai kebutuhan Anda
}

export default Setup;