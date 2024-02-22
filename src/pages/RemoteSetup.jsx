import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

function EzSetup() {
    const [imgSelected, setImgSelected] = createSignal('Default');

    const themes = {
        "Default": "https://i0.wp.com/themes.svn.wordpress.org/twentytwentyfour/1.0/screenshot.png?w=572&strip=all",
        "Hello Elementor": "https://i0.wp.com/themes.svn.wordpress.org/hello-elementor/3.0.1/screenshot.png?w=572&strip=all",
        "Astra": "https://i0.wp.com/themes.svn.wordpress.org/astra/4.6.4/screenshot.jpg?w=572&strip=all",
        "Neve": "https://i0.wp.com/themes.svn.wordpress.org/neve/3.8.1/screenshot.png?w=572&strip=all",
        "Twenty Twenty-Two": "https://i0.wp.com/themes.svn.wordpress.org/twentytwentytwo/1.6/screenshot.png?w=572&strip=all"
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center 
        min-h-screen v-screen 
        bg-base-100 p-8">
                <div
                    className="shadow-md bg-base-200 rounded-md w-3/5 p-8 flex flex-col justify-stretch gap-3"
                >
                    <h1 className="text-4xl">New Wordpress setup wizard</h1>
                    <div className="flex flex-col max-w-full justify-stretch gap-3">
                        <label htmlFor="name">Name</label>
                        <input placeholder="Name" className="input input-bordered" type="text" name="name" id="" />
                        <label htmlFor="server-location">Server Location</label>
                        <select name="server-location" className="select select-bordered select-md">
                            <option value="null" disabled selected>Pick one</option>
                            <option value="jakarta">Jakarta</option>
                            <option value="singapore">Singapore</option>
                            <option value="kualalumpur">Kuala Lumpur</option>
                            <option value="bangkok">Bangkok</option>
                            <option value="hongkong">Hongkong</option>
                        </select>

                        <label htmlFor="plugins-search">Plugins</label>
                        <input onClick={() => window.open("https://wordpress.org/plugins/", "_blank").focus()} placeholder="Search"
                            className="input input-bordered" type="text" name="plugins-search" id="" />
                        <div className="overflow-x-auto">
                            <table className="table table-xs max-w-full">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Author</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <td>1</td>
                                        <td>Akismet Anti-spam: Spam Protection</td>
                                        <td>The best anti-spam protection to block spam comments and spam in a contact div.</td>
                                        <td>Automattic - Anti-spam Team</td>
                                        <td>
                                            <a className="btn btn-warning me-2 btn-sm">Edit</a>
                                            <a className="btn btn-error btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Quiz Maker</td>
                                        <td>
                                            WordPress Quiz Plugin allows you to create advanced quizzes and exams easily and quickly.
                                        </td>
                                        <td>Quiz Maker team</td>
                                        <td>
                                            <a className="btn btn-warning me-2 btn-sm">Edit</a>
                                            <a className="btn btn-error btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                </thead>
                            </table>

                        </div>
                        <label htmlFor="themes">Theme</label>
                        <select name="themes" id="themes" className="select select-bordered"
                            onInput={(e) => setImgSelected(e.currentTarget.value)}>
                            <For each={Object.entries(themes)}>
                                {
                                    (e) => <option value={e[0]}>{e[0]}</option>
                                }
                            </For>
                        </select>
                        <div className="card card-bordered flex flex-row items-center 
                    h-28 shadow-md my-5 w-fit pr-4 gap-3 overflow-hidden">
                            <img className="h-28 flex-auto" src={themes[imgSelected()]} alt="theme-alt" />
                            <h3 className="text-lg flex-auto" >{imgSelected()}</h3>
                        </div>
                        <button className="btn btn-primary self-end text-white"
                            onClick={() => document.getElementById("confirm_modal").showModal()}
                        >Continue</button>
                    </div>
                </div>
            </div>

            <dialog id="confirm_modal" className="modal">
                <div className="modal-box">
                    <div className="flex flex-row justify-between">
                        <h3 className="font-bold text-lg">Confirmation</h3>
                        <form method="dialog" className="inline">
                            <button>
                                <i className="fa-solid fa-xmark text-2xl"
                                ></i>
                            </button>
                        </form>
                    </div>
                    <p className="py-4">Are you sure you want to make a new Wordpress instance with this configuration?</p>
                    <div className="modal-action">
                        <A className="btn btn-success btn-sm text-white" href="/">Yes</A>
                        <form method="dialog" className="inline">
                            <button className="btn btn-error btn-sm text-white">No</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default EzSetup;