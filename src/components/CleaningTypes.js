import React from 'react';


const CleaningTypes = () => (
    <div className="bg-mat text-white">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4">
                <div className="cleaning-type p-5 text-center">
                    <img src="https://placehold.it/200" className="mx-auto" />
                    <span className="text-xl mt-2 block">Weekly or fortnightly</span>
                </div>
                <div className="cleaning-type p-5 text-center">
                    <img src="https://placehold.it/200" className="mx-auto" />
                    <span className="text-xl mt-2 block">End of tenancy</span>
                </div>
                <div className="cleaning-type p-5 text-center">
                    <img src="https://placehold.it/200" className="mx-auto" />
                    <span className="text-xl mt-2 block">One off clean</span>
                </div>
                <div className="cleaning-type p-5 text-center">
                    <img src="https://placehold.it/200" className="mx-auto" />
                    <span className="text-xl mt-2 block">Deep clean</span>
                </div>
            </div>
        </div>
    </div>
)

export default CleaningTypes