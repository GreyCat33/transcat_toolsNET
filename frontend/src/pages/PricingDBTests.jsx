import TestingPricingDb from "../components/TestingPricingDb";

export default function PricingDBTests() {
    return (
        <div className="PricingDBTests">
            <div className="PricingDBTests__header">
                <h1>Pricing DB Tests</h1>
            </div>
            <div className="PricingDBTests__content">
                <p>This is the Pricing DB Tests page.</p>
                <p>Here you can test the pricing database.</p>
                
                <TestingPricingDb dbName="Category Options DB" apiPath="categoryoptions" />
                <TestingPricingDb dbName="Service Category DB" apiPath="servicecategory" />
                <TestingPricingDb dbName="service Item Option DB" apiPath="serviceitemoptions" />
                <TestingPricingDb dbName="Service Items DB" apiPath="serviceitems" />
                <TestingPricingDb dbName="Service Item Disabled Service Levels DB" apiPath="serviceitemdisabledservicelevels" />
                
            </div>
        </div>
    );
}