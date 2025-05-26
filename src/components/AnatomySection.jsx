import HealthStatusCards from "./HealthStatusCards"
import { healthStatusData } from "../data/healthData"
import "./AnatomySection.css"

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="anatomy-figure">
          <img src="https://a23d.co/cdn-cgi/imagedelivery/S4svCqSolndHzMne84t1OQ/A23DMOD041696A_Preview/productpage" alt="Human Anatomy" className="anatomy-image" />
          <div className="health-indicator healthy-heart">
            <span className="indicator-icon">❤️</span>
            <span className="indicator-text">Healthy Heart</span>
          </div>
          <div className="health-indicator healthy-leg">
            <span className="indicator-text">Healthy Leg</span>
          </div>
        </div>
        <HealthStatusCards healthData={healthStatusData} />
      </div>
    </div>
  )
}

export default AnatomySection
