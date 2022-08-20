import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type})=>{
    return <button className={" widgetLgButton " + type }>{type} </button>
  }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgtable">
          <tr className="widgetLgTr">
            <th className="widgetLgth">Costumer</th>
            <th className="widgetLgth">Date</th>
            <th className="widgetLgth">Amount</th>
            <th className="widgetLgth">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://www.cinemascomics.com/wp-content/uploads/2017/01/Drax-el-Destructor-en-Vengadores-La-Guerra-del-Infinito.jpg" 
              alt="" className="widgetLgImg" />
              <span className="widgetLgName">Drax Demoledor</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"> 
            <Button type="Approved"/>
            </td>
          </tr>

          
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://www.cinemascomics.com/wp-content/uploads/2017/01/Drax-el-Destructor-en-Vengadores-La-Guerra-del-Infinito.jpg" 
              alt="" className="widgetLgImg" />
              <span className="widgetLgName">Drax Demoledor</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"> 
            <Button type="Declined"/>
            </td>
          </tr>

         
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://www.cinemascomics.com/wp-content/uploads/2017/01/Drax-el-Destructor-en-Vengadores-La-Guerra-del-Infinito.jpg" 
              alt="" className="widgetLgImg" />
              <span className="widgetLgName">Drax Demoledor</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"> 
            <Button type="Pending"/>
            </td>
          </tr>

        
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://www.cinemascomics.com/wp-content/uploads/2017/01/Drax-el-Destructor-en-Vengadores-La-Guerra-del-Infinito.jpg" 
              alt="" className="widgetLgImg" />
              <span className="widgetLgName">Drax Demoledor</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"> 
            <Button type="Approved"/>
            </td>
          </tr>
        </table>
    </div>
  );
}
