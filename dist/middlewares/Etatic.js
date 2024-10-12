import express from "express";
import path from "path";
express["static"](path.join(__dirname, 'public'));