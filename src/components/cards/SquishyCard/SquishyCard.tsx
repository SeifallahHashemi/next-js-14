import React from 'react';
import Card from "@/components/cards/SquishyCard/Card";

const SquishyCard = () => {
    return (
        <section className="bg-neutral-900 px-4 py-12 absolute inset-0">
            <div className="mx-auto w-fit">
                <Card />
            </div>
        </section>
    );
};

export default SquishyCard;