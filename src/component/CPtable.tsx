import './CPtable.css';
type tableProps = {
    label: string;
    datasourse: any[];
    cols: any[];
  };
  
  
  export default function CPTable(props: tableProps) {
    const { datasourse, cols } = props;
    return (
      <>
        <div>
          <table border={1}>
            <thead>
              <tr>
                {cols.map((x, i) => (
                  <th>{x.heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {datasourse.map((row, i) => (
                <tr>
                  {cols.map((col, ind) => (
                    <td>{row[col.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  