import react from 'react'
import { Link } from 'react-router-dom'
import "../style/Footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="links"><Link to="/help">ヘルプ</Link></div>
      <div className="copy-rights">Copyrights By Yashiro Ryo</div>
    </div>
  )
}