import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import LogsShuttle from "../logs-shuttle";

function Dashboard() {
    let [sidebar, setSidebar] = createSignal(false);
    return (<>
        <div className="drawer drawer-open">
            <input id="sidebar" type="checkbox" className="drawer-toggle" checked={sidebar()} />
            <div className="drawer-content">
                <div className="w-full navbar bg-base-200">
                    <label
                        htmlFor="sidebar"
                        // onClick={() => setSidebar(true)}
                        className="btn drawer-button">
                        <i class="fa-solid fa-bars"></i>
                    </label>
                </div>
                <div className="p-4 flex flex-col h-min gap-10">
                    <h1 className="text-3xl font-semibold">Welcome, User</h1>
                    <div className="flex flex-row min-w-full justify-stretch gap-3">
                        <div className="card card-compact flex-1 bg-base-200 shadow-lg h-min w-64">
                            <div className="card-body">
                                <h3 className="text-xl">Bill</h3>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-3xl font-semibold">Rp 1.000.000</p>
                                    <i class="fa-solid fa-money-bill text-4xl"></i>
                                </div>
                                <h2 className="text-md text-slate-600">Current month</h2>
                            </div>
                        </div>
                        <div className="card card-compact flex-1 bg-base-200 shadow-lg h-min w-64">
                            <div className="card-body">
                                <h3 className="text-xl">Total Load</h3>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-3xl font-semibold">62%</p>
                                    <i class="fa-solid fa-microchip text-4xl"></i>
                                </div>
                                <h2 className="text-md text-slate-600">Refresh every minute</h2>
                            </div>
                        </div>
                        <div className="card card-compact flex-1 bg-base-200 shadow-lg h-min w-64">
                            <div className="card-body">
                                <h3 className="text-xl">Request</h3>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-3xl font-semibold">14k</p>
                                    <i class="fa-solid fa-circle-nodes text-4xl"></i>
                                </div>
                                <h2 className="text-md text-slate-600">Refresh every day</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 self-stretch justify-center 
                    items-stretch">
                        <ul className="flex flex-col gap-3 flex-1">
                            <li><h3 className="text-2xl">Servers</h3></li>
                            <A href="/setup/method" className="btn self-end"><i class="fa-solid fa-plus"></i></A>
                            <li className="btn">Pilpres Flash! - Wordpress instance</li>
                            <li className="btn">Electoko Web - NodeJS instance</li>
                            <li className="btn">Electoko API - Docker container</li>
                            <li className="btn">Electoko Database - Database instance</li>
                        </ul>
                        <div className="divider divider-horizontal flex-2"></div>
                        <div className="flex flex-col gap-3 flex-1 w-1/3">
                            <h3 className="text-2xl">Logs</h3>
                            <div className="mockup-code max-h-96 overflow-scroll">
                                <LogsShuttle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar" className="drawer-overlay" />
                <ul
                    className="menu p-4 w-80 min-h-full bg-base-300 text-base-content gap-1"
                >
                    <li><h1 className="text-4xl font-semibold">EZ Hosting</h1></li>
                    <div className="divider"></div>
                    <li><A href="/" className="text-md">
                        <i class="fa-solid fa-gauge text-xl"></i>
                        Dashboard</A></li>
                    <li><A href="/servers">
                        <i class="fa-solid fa-server text-xl"></i>
                        Servers</A></li>
                    <li><A href="/security">
                        <i class="fa-solid fa-shield-halved text-xl"></i>
                        Security</A></li>
                    <li><A href="/balancer">
                        <i class="fa-solid fa-scale-balanced text-xl"></i>
                        Load Balancer</A></li>
                    <div className="flex-1"></div>
                    <div className="divider"></div>
                    <li><A href="/settings">
                        <i class="fa-solid fa-gear text-xl"></i>
                        Settings</A></li>
                    <li><A href="/logout">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Logout</A></li>
                </ul>
            </div>
        </div>
    </>);

}

export default Dashboard;