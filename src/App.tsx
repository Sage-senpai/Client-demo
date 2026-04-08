import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowcaseSelector from './showcase/ShowcaseSelector';

const RestaurantApp = lazy(() => import('./industries/restaurant/RestaurantApp'));
const AirportApp = lazy(() => import('./industries/airport/AirportApp'));
const ResortApp = lazy(() => import('./industries/resort/ResortApp'));
const DeliveryApp = lazy(() => import('./industries/delivery/DeliveryApp'));
const SchoolApp = lazy(() => import('./industries/school/SchoolApp'));
const SaasApp = lazy(() => import('./industries/saas/SaasApp'));
const TechApp = lazy(() => import('./industries/tech/TechApp'));
const ConstructionApp = lazy(() => import('./industries/construction/ConstructionApp'));
const BeautyApp = lazy(() => import('./industries/beauty/BeautyApp'));
const CoworkingApp = lazy(() => import('./industries/coworking/CoworkingApp'));
const FitnessApp = lazy(() => import('./industries/fitness/FitnessApp'));
const RealEstateApp = lazy(() => import('./industries/realestate/RealEstateApp'));
const EcommerceApp = lazy(() => import('./industries/ecommerce/EcommerceApp'));
const HealthcareApp = lazy(() => import('./industries/healthcare/HealthcareApp'));
const FintechApp = lazy(() => import('./industries/fintech/FintechApp'));
const AgencyApp = lazy(() => import('./industries/agency/AgencyApp'));
const AgritechApp = lazy(() => import('./industries/agritech/AgritechApp'));

function Loader() {
  return (
    <div className="page-loader">
      <div className="page-loader__spinner" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<ShowcaseSelector />} />
        <Route path="/restaurant/*" element={<RestaurantApp />} />
        <Route path="/airport/*" element={<AirportApp />} />
        <Route path="/resort/*" element={<ResortApp />} />
        <Route path="/delivery/*" element={<DeliveryApp />} />
        <Route path="/school/*" element={<SchoolApp />} />
        <Route path="/saas/*" element={<SaasApp />} />
        <Route path="/tech/*" element={<TechApp />} />
        <Route path="/construction/*" element={<ConstructionApp />} />
        <Route path="/beauty/*" element={<BeautyApp />} />
        <Route path="/coworking/*" element={<CoworkingApp />} />
        <Route path="/fitness/*" element={<FitnessApp />} />
        <Route path="/realestate/*" element={<RealEstateApp />} />
        <Route path="/ecommerce/*" element={<EcommerceApp />} />
        <Route path="/healthcare/*" element={<HealthcareApp />} />
        <Route path="/fintech/*" element={<FintechApp />} />
        <Route path="/agency/*" element={<AgencyApp />} />
        <Route path="/agritech/*" element={<AgritechApp />} />
      </Routes>
    </Suspense>
  );
}
