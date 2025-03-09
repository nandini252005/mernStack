const SidePanel = () => {
    return (
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
            {/* Ticket Price Section */}
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">Ticket Price</p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                    5000
                </span>
            </div>

            {/* Available Time Slots */}
            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Available Time Slots:
                </p>

                <ul className="mt-3">
                    {[
                        { day: "Sunday", time: "4:00 PM - 9:30 PM" },
                        { day: "Tuesday", time: "4:00 PM - 9:30 PM" },
                        { day: "Wednesday", time: "4:00 PM - 9:30 PM" },
                    ].map((slot, index) => (
                        <li key={index} className="flex items-center justify-between mb-2">
                            <p className="text-[15px] leading-6 text-textColor font-semibold">
                                {slot.day}
                            </p>
                            <p className="text-[15px] leading-6 text-textColor font-semibold">
                                {slot.time}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Appointment Booking Button */}
            <button className="btn px-2 w-full rounded-md">Book Appointment</button>
        </div>
    );
};

export default SidePanel;
