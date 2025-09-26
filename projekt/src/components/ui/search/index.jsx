"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import "./search-bar.scss"

// Taget fra et tidligere project

function SearchForm() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        if (query.length < 2) {
            setResults([]);
            return;
        }
        setLoading(true);
        fetch(`http://localhost:4000/api/v1/listings`)
            .then(res => res.json())
            .then(data => {
                if (!isMounted) return;
                const filtered = data.filter(listing =>
                    listing.title.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filtered);
                setLoading(false);
            })
            .catch(() => {
                if (isMounted) setLoading(false);
            });
        return () => { isMounted = false; };
    }, [query]);

    return (
        <div className="search-bar">
            <div className="search-bar__container">
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="search-bar__container__input"

                />
                <CiSearch className="search-bar__container__icon" />
            </div>
            {loading && <div className="search-bar__loading">Loading...</div>}
            {results.length > 0 && (
                <div className="search-suggestions">
                    {results.map(listing => (
                        <Link href={`/listing/${listing.id}`} key={listing.id}>
                            <p key={listing.id}>{listing.title}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchForm;