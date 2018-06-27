export const get_houses = `
    SELECT h.hcode, h.hno, h.xgis, h.ygis
    FROM house h 
    WHERE (h.xgis <> '' AND h.ygis <> '')
`;