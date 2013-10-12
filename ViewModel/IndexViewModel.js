function IndexViewModel() {
    var self = this;

    self.EsValido = ko.observable(false);
    self.Mensaje = "";

    self.EsFactura = ko.observable(false);
    self.EsGuiaRemision = ko.observable(false);
    self.EsNotaCredito = ko.observable(false);
    self.EsNotaDebito = ko.observable(false);
    self.EsRetencion = ko.observable(false);

    self.DocFactura = null;
    self.DocGuiaRemision = null;
    self.DocNotaCredito = null;
    self.DocNotaDebito = null;
    self.DocRetencion = null;
    self.DocAutorizacion = null;
    self.CamposAdicionales = null;

    self.TieneErroresValidacion = ko.observable(false);
    self.TieneCamposAdicionales = ko.observable(false);
    self.ErroresValidacion = null;
}