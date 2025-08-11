import React from 'react';
import { SettingsIcon, FilterIcon, SearchIcon } from '../assets/icons/Icon';
// import { DataTableDemo } from '@/components/Table';
import noPromptImage from '../assets/images/empty-box 1.png'

const PromptsPage: React.FC = () => {
    return (
        <div className="p-4 h-screen flex flex-col lg:gap-8 sm:p-6 lg:p-8">
            <div className="lg:flex items-center text-sm text-[#667085]">
                <div className="flex gap-1">
                    <SettingsIcon className="w-5 h-5" fill="#667085" />
                    <span className="font-semibold">Settings</span>
                </div>
                <span className="mx-2">/</span>
                <span className="font-semibold">Prompts</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold ">Prompts</h1>
                    <p className="mt-1 text-[#667085]">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <button className="mt-4 sm:mt-0 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                    New prompt
                </button>
            </div>

            <div className="flex flex-col  border-1 h-full border-black rounded-[10px]">
                <div className="px-6 py-4 border-b-1">
                    <div className="flex flex-row h-full justify-between sm:items-center">
                        <h2 className="text-xl font-semibold text-gray-700">All Prompts</h2>
                        <div className="flex items-center mt-4 sm:mt-0 space-x-4">
                            <button className="lg:flex hidden items-center border rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                <FilterIcon />
                                Filter
                            </button>
                            <div className="relative hidden lg:block">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <SearchIcon />
                                </span>
                                <input type="text" placeholder="Search in list..." className="border rounded-lg pl-10 pr-4 py-2 w-full sm:w-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-full px-6 py-4 flex flex-col justify-center items-center rounded-lg">
                    <div className="w-40 h-40">
                        <img className="w-full h-full object-contain" src={noPromptImage} />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-800">You have not created any prompts yet</h3>
                    <p className="mt-2 text-gray-500">Get started by creating a new prompt.</p>
                    <button className="mt-6 bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                        New prompt
                    </button>
                </div>
                {/* <DataTableDemo/> */}
            </div>
        </div>
    );
};

export default PromptsPage;
