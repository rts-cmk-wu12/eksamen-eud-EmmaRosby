"use client";
import Image from "next/image";
import "./request-swap.scss"

import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "showModal":
            return {
                ...state,
                showModal: action.showModal,
                request: action.request
            }
        case "hideModal":
            return {
                ...state,
                request: null,
                showModal: false
            }
    }
}

function RequestSwapButton({ myMatches, item }) {
    const [state, dispatch] = useReducer(reducer, {
        showModal: false,
        request: null
    });

    console.log(item);



    return (
        <>
            <button
                type="button"
                onClick={() => dispatch({ type: "showModal", showModal: true, })}
                className="request"
            >Propose a swap</button>
            {state.showModal && (
                <div className="overlay-wrapper">

                    <div className="overlay">

                        <button
                            onClick={() => dispatch({ type: "showModal", showModal: false, })}
                            className="overlay__btn"
                        >X</button>
                        <div className="overlay__wrapper">

                            <h2 >Swap With {item.user.firstname} {item.user.lastname}</h2>
                            <div className="overlay__wrapper__article">

                                {myMatches?.map(items => (
                                    <article key={items.id} className="overlay__wrapper__article__my-item">
                                        <div className="overlay__wrapper__article__my-item__img-wrapper">
                                            <Image
                                                src={items.asset.url}
                                                alt={items.title}
                                                width={100}
                                                height={100}
                                                className="overlay__wrapper__article__my-item__img-wrapper__img"
                                            />
                                        </div>
                                        <h2 className="overlay__wrapper__article__my-item__img-wrapper__title">{items.title}</h2>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}

export default RequestSwapButton;