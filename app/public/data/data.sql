USE OCFR;

CREATE TABLE Person (
    PerId INTEGER PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(64),
    LastName VARCHAR(64),
    Gender VARCHAR(64),
    Address  VARCHAR(64),
    WorkPhone  VARCHAR(10),
    MobilePhone  VARCHAR(10).
    Email  VARCHAR(64),
    dob DATE DEFAULT NULL,
    StartDate DATE,
    RadioNumber  VARCHAR(10),
    StationNumber  VARCHAR(10),
    Position  VARCHAR(64),
    IsActive  VARCHAR(1)
);

INSERT INTO Person (PerId,FirstName, LastName, Gender, Address, WorkPhone, MobilePhone, Email, dob, StartDate,RadioNumber,StationNumber,Position,IsActive) VALUES
("FirstName","LastName", "Gender", "Address", "WorkPhone", "MobilePhone","Email","dob","StartDate","RadioNumber","StationNumber","Position","IsActive"),

CREATE TABLE Certification (
    CertId INTEGER PRIMARY KEY AUTO_INCREMENT,
    CertifyAgency VARCHAR(64) ,
    CertName VARCHAR(64),
    ExpPeriod VARCHAR(2),

);

INSERT INTO Certification (CertId, CertifyAgency, CertName, ExpPeriod) VALUES
('CertifyAgency', 'CertName','ExpPeriod');

CREATE TABLE Per_Cert (
  PerId INTEGER,
  CertId INTEGER,
  CertDate DATE,
  FOREIGN KEY (PerId) REFERENCES Person(PerId),
  FOREIGN KEY (CertId) REFERENCES Certification(CertId)
);
