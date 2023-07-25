import React from "react";
import { useDispatch } from "react-redux";
import { fetchColors } from "../store/slices/colors";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../styles.css";
const ColorList = () => {
  const { list: colors } = useSelector((state) => state.colors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchColors());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row">
        {colors.map((color) => (
          <div className="col-md-3 py-2 mb-4" key={color.id}>
            <div className="card">
              <div
                name="cuadrado"
                className="cuadrado"
                style={{ backgroundColor: color.color }}
              ></div>
              <div className="card-body">
                <h4 className="card-title">Pantone</h4>
                <h5 className="card-text">{color.pantone_value}</h5>
                <h5 className="card-text">{color.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ColorList;
