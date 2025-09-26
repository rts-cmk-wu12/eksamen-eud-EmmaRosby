"use client";
import { useState } from "react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import ListingCard from "../listing-card";
import "./pagination.scss"

function Pagination({ listings }) {
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 6
    const totalPages = Math.ceil(listings.length / itemsPerPage);
    const startIndex = (currentPage - 1);
    const selectedListings = listings.slice(startIndex, startIndex + itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const prev = () => {
        setCurrentPage((page) => page - 1, 1)
    }
    const next = () => {
        setCurrentPage((page) => page + 1, totalPages)
    }

    return (
        <>
            <div className="listings">
                {selectedListings.map((listing) =>
                    <ul key={listing.id} className="listings__items">
                        <li><ListingCard listing={listing} /></li>
                    </ul>
                )}
            </div>

            <div className="pagination">
                <button
                    onClick={prev}
                    disabled={currentPage === 1}
                    className="pagination__button"
                ><IoArrowBackOutline /> Previous
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        className={`pagination__not-active ${currentPage === page ? "pagination__active" : ""}`}
                    >{page}</button>
                ))}

                <button
                    onClick={next}
                    disabled={currentPage === totalPages}
                    className="pagination__button"
                >Next <IoArrowForward />
                </button>

            </div>
        </>
    );
}

export default Pagination;