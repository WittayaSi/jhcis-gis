export const get_houses = `
    SELECT h.hcode, h.hno, h.villcode, h.xgis, h.ygis
    FROM house h
    WHERE SUBSTRING(h.villcode, 7, 8) = '02';
`;

export const get_village = `
    SELECT v.villcode, v.villno, v.villname
    FROM village v;
`;