import React, { useState } from "react";
import { useFilterStore } from "../../store/filter-store";
import { addDays, subMonths } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const FilterComponent: React.FC = () => {
    const { setFilter, clearAllFilters } = useFilterStore((state) => ({
        setFilter: state.setFilter,
        clearAllFilters: state.clearAllFilters,
    }));

    // Local state for filter form inputs
    const [plot, setPlot] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [cast, setCast] = useState<string>("");
    const [releasedAfter, setReleasedAfter] = useState<Date | null>(null);
    const [releasedBefore, setReleasedBefore] = useState<Date | null>(null);

    const predefinedRanges = [
        { label: "Last 7 Days", range: [addDays(new Date(), -7), new Date()] },
        { label: "Last 1 Month", range: [subMonths(new Date(), 1), new Date()] },
        { label: "Last 3 Months", range: [subMonths(new Date(), 3), new Date()] },
    ];

    // Function to apply the filters
    const handleApplyFilters = () => {
        console.log('apply filters')
        console.log('plot: ', plot)
        console.log('title: ', title)
        console.log('date: ', releasedAfter, releasedBefore)
        if (plot) setFilter("plot", plot);
        if (title) setFilter("title", title);
        if (cast) setFilter("cast", cast);
        if (releasedAfter) setFilter("releasedAfter", releasedAfter);
        if (releasedBefore) setFilter("releasedBefore", releasedBefore);
    };

    // Function to reset the filters and the local form state
    const handleResetFilters = () => {
        clearAllFilters();
        setPlot("");
        setTitle("");
        setCast("");
        setReleasedAfter(null);
        setReleasedBefore(null);
    };

    const handleDateRangeSelect = (range: Date[]) => {
        setReleasedAfter(range[0]);
        setReleasedBefore(range[1]);
    };

    return (
        <div className="filter-container">
            <h2>Filter Movies</h2>
            <div>
                <label htmlFor="plot">Plot:</label>
                <input
                    type="text"
                    id="plot"
                    value={plot}
                    onChange={(e) => setPlot(e.target.value)} // Correct way to get input value
                    placeholder="Filter by plot"
                />
            </div>

            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Filter by title"
                />
            </div>

            <div>
                <label htmlFor="cast">Cast:</label>
                <input
                    type="text"
                    id="cast"
                    value={cast}
                    onChange={(e) => setCast(e.target.value)}
                    placeholder="Filter by cast"
                />
            </div>

            {/* Date pickers for releasedAfter and releasedBefore */}
            <div>
                <label>Released After:</label>
                <DatePicker
                    selected={releasedAfter}
                    onChange={(date: Date | null) => setReleasedAfter(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select release after date"
                />
            </div>

            <div>
                <label>Released Before:</label>
                <DatePicker
                    selected={releasedBefore}
                    onChange={(date: Date | null) => setReleasedBefore(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select release before date"
                />
            </div>

            {/* Predefined date range options */}
            <div>
                <label>Date Range:</label>
                <div>
                    {predefinedRanges.map((range) => (
                        <button
                            key={range.label}
                            onClick={() => handleDateRangeSelect(range.range)}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <button onClick={handleApplyFilters}>Apply Filters</button>
                <button onClick={handleResetFilters}>Reset Filters</button>
            </div>
        </div>
    );
};

export default FilterComponent;
